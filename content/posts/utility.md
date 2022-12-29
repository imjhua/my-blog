---
date: 2023-01-01
title: 유용한 유틸리티 모음
slug: /tech/utility
tags: [tech]
---

## git 원격에서 삭제된 브랜치 모두 삭제하기

원격(remote) 브랜치를 트래킹하는 로컬 브랜치가 존재하는 상태에서 원격 브랜치가 삭제된 경우, 내 로컬 컴퓨터에만 브랜치가 남게 된다. 남아있는 로컬 브랜치를 지워주는 커스텀 명령어 설정 방법이 있다.

트래킹하는 상태에서 원격 브랜치가 삭제되면 `gone` 상태로 전환된다는 점을 이용한다. git gone 명령어는 두 가지를 실행한다.
- git fetch -p 를 통해 prune 처리 (지워진 원격 브랜치 정보 갱신)
- 지워진 원격 브랜치를 트래킹하는 로컬 브랜치를 모두 삭제

참고) 트래킹하는 원격 브랜치가 없는 로컬 브랜치는 지워지지 않는다.

git 실행이 가능한 터미널에서 아래 명령어를 사용하면 git gone 명령어를 커스텀 커맨드로 추가하여 사용할 수 있다.

```sh
$ git config --global alias.gone "! git fetch -p && git for-each-ref --format '%(refname:short) %(upstream:track)' | awk '\$2 == \"[gone]\" {print \$1}' | xargs -r git branch -D"
$ git gone # 원격에서 삭제된 브랜치를 로컬에서 모두 삭제
```
---

- https://news.hada.io/topic?id=7933&utm_source=slack&utm_medium=bot&utm_campaign=T5QJE887Q