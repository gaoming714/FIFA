from pathlib import Path
import json
import tomlkit
import hashlib
import hmac
from flask import Flask, request, jsonify
from util import (
    logConfig,
    logger,
    lumos,
    show_local,
    create_hash,
    check_hash,
    check_intact,
)

logConfig("logs/download.log", rotation="10 MB", level="DEBUG", lite=True)

TASK = []

app = Flask(__name__)

@app.route("/<id>", methods=['GET', 'POST'])
def main(id):
    if request.method == 'GET':
        return "Hello World!"
    repo = TASK.get(id, None)
    if not repo:
        return "No Repo local.", 400
    path = Path(repo["path"])
    secret = repo["secret"]
    signature = request.headers.get('X-Hub-Signature-256', '')
    expected_signature = 'sha256=' + hmac.new(
        secret.encode('utf-8'),
        msg=request.data,
        digestmod=hashlib.sha256
    ).hexdigest()
    print(path, secret)
    print(signature)
    print(expected_signature)
    # 验证签名
    if hmac.compare_digest(signature, expected_signature):
        # 签名验证成功，执行你的代码，比如 pull 操作
        print("Signature verification succeeded. Executing pull...")
        # 在这里你可以调用你的 pull 函数或者执行其他任务
        pull(path)
        return "Pull executed successfully.", 200
    else:
        # 签名验证失败
        print("Signature verification failed.")
        return "Invalid signature", 400    # print(pull(Path(TASK["FIFA"]["path"])))


def pull(repo_path):
    logger.info(f"Pulling {repo_path}")
    if not repo_path.exists():
        logger.info(f"No Repo {repo_path}")
        return
    git_flag = repo_path / ".git"
    if not git_flag.is_dir():
        logger.info(f"No Folder .git {repo_path}")
        return
    cmd = "cd {} && git fetch && git rebase".format(repo_path)
    res = lumos(cmd, warning=True)
    if res == 0:
        return True
    else:
        return


def boot():
    global TASK
    with open("config.toml", "r", encoding="utf-8") as f:
        config = tomlkit.parse(f.read())
    TASK = config
    print(TASK)


if __name__ == "__main__":
    boot()
    app.run(debug=True,port=8000)