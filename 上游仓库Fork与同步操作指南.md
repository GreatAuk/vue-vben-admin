## 1. Fork 原仓库
在 GitHub 界面点击原仓库右上角的 Fork，生成你自己的仓库副本（如 yourusername/A）。

## 2. 克隆你的 Fork 到本地
```bash
git clone https://github.com/yourusername/A.git
cd A
```

## 3. 添加上游仓库（原仓库 A）
添加原仓库作为远程仓库（通常命名为 upstream）：

```bash
git remote add upstream https://github.com/original-owner/A.git
```

验证远程仓库配置：

```bash
git remote -v
# 输出应包含：
# origin    https://github.com/yourusername/A.git (fetch/push)
# upstream  https://github.com/original-owner/A.git (fetch)
```

## 4. 创建开发分支（推荐）
为自定义内容创建独立分支，避免污染主分支：

```bash
git checkout -b custom-feature
```

## 5. 添加自定义内容
在 custom-feature 分支进行修改，完成后提交：

```bash
git add .
git commit -m "添加自定义内容"
git push origin custom-feature
```

## 6. 定期同步原仓库的更新
### 步骤 6.1：拉取上游更新

```bash
# 切换到主分支（如 main/master）
git checkout main

# 从上游仓库获取最新代码
git fetch upstream

# 合并到本地主分支
git merge upstream/main
```

### 步骤 6.2：解决冲突（如有）
如果上游更新与你的修改冲突，手动解决冲突后提交：

```bash
git add .
git commit -m "合并上游更新并解决冲突"
```

### 步骤 6.3：推送同步后的主分支到你的 Fork

```bash
git push origin main
```

## 7. 将上游更新合并到自定义分支

```bash
# 切换到你的开发分支
git checkout custom-feature

# 合并主分支的最新代码（包含上游更新）
git merge main

# 或使用 rebase（保持提交历史线性）
git rebase main
```

解决可能出现的冲突后推送：

```bash
git push origin custom-feature
# 若使用 rebase 需强制推送（谨慎操作）：
git push -f origin custom-feature
```

## 8. 定期重复步骤 6-7
每次原仓库有更新时，重复拉取、合并到主分支，再合并到你的开发分支。

关键命令总结
| 操作 | 命令 |
|------|------|
| 添加上游仓库 | `git remote add upstream <原仓库URL>` |
| 拉取上游更新 | `git fetch upstream` |
| 合并到主分支 | `git merge upstream/main` |
| 合并到开发分支 | `git merge main` 或 `git rebase main` |

**注意事项**
1. 分支策略

  * 主分支（main）仅用于同步上游更新。

  * 自定义内容在独立分支（如 custom-feature）开发。

2. 冲突处理

  * 合并时优先解决冲突，避免直接覆盖代码。

3. 强制推送

  * 使用 git push -f 仅在私有分支安全，公共分支慎用。

4. 自动化同步

  * 可通过 GitHub Actions 定期自动同步上游更新（需编写 workflow 文件）。

通过以上步骤，你可以在保留自定义内容的同时，持续获取原仓库的更新。
