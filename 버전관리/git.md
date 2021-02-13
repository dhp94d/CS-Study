# git



## git의 역사

1991~ 2002 년도의 Linux 오픈소스  프로젝트는 Patch와 단순 압축 파일로만 관리함 2002년이 되서야 Linux커널은 BitKeeper라고 불리는 상용 DVCS를 사용하기 시작함.

2005년에 BitKeeper의 무료 사용이 재고되어 Linux 개발 커뮤니티가 자체 도구를 만드는 계기가 됨(Git)

Git은 BitKeeper을 사용하면서 얻은 경험을 기반으로 아래와 같은 목표를 세움

- 빠른속도
- 단순한 구조
- 비선형적인 개발(수천 개의 동시 다발적인 브랜치)

- Linux 커널 같은 대형 프로젝트에도 유용할것(속도나 데이터 크리 면에서)

Git는 2005년에 탄생. 



## git 기초

**Git**

Git은 데이터를 파일 시스템의 스냅샷의 연속으로 취급하고 크기가 아주 작음.

Git은 커밋하거나 프로젝트의 상태를 저장할 때마다 파일이 존재하는 그 순간을 중요하게 여김

파일이 달라지지 않았으면 성능을 위해서 파일을 새로 저장하지 않음. 단지 이전 상태의 파일에 대한 링크만 저장함.



### 거의 모든 명령을 로컬에서 실행

 거의 모든 명령이 로컬 파일과 데이터만 사용하기 때문에 네트워크에 있는 다른 컴퓨터는 필요 없음. 프로젝트의 모든 히스토리가 로컬 디스크에 있음(속도가 빠름)

ex) 프로젝트 히스토리 조회 시 그냥 로컬 데이터베이스에서 히스토리를 읽어서 보여줌

오프라인 상태이거나 VPN에 연결하지 못해도 막힘 없이 일이 가능함



### git의 무결성

git은 데이터를 저장하기 전에 항상 체크섬을 구하고 그 체크섬으로 데이터를 관리함.

체크섬은 git에서 사용하는 가장 기본적인 데이터 단위이자 git의 철함.

git은 SHA-1 해시를 사용하여 체크섬을 만듬. 실제로 Git은 파일을 이름으로 저장하지 않고 해당 파일의 해시로 저장한다.



### Git은 데이터를 추가할 뿐

Git으로 무엇을 하든 Git데이터 베이스에 데이터가 추가됨. 



### Git에서 데이터를 어떻게 저장하고 손실을 어떻게 복구하는가

Git은 Committed, Modified, staged 이렇게 세 가지 상태로 관리한다.

- COmmitted는 데이터가 로컬 데이터베이스에 안전하게 저장됐다는 것을 의미
- Modified는 수정한 파일을 아직 로컬 데이터베이스에 커밋하지 않은 것을 말함
- staged란 현재 수정한 파일을 곧 커밋할 것이라고 표시한 상태를 의미함.

이렇게 세 가지 상태는 Git 프로젝트의 세가지 단계와 연결되어 있다. Git디렉토리, 워킹 트리, Staging Area 

![image](https://user-images.githubusercontent.com/68668924/107844965-4e31f000-6e1b-11eb-8e18-8f35b0ecc70e.png) 

Git 디렉토리는 Git이 프로젝트의 메타데이터와 객체 데이터베이스를 저장하는 곳을 말함. 이 Git디렉토리가 Git의 핵심임 다른 컴퓨터에 있는 저장소를 Clone할 때 Git 디렉토리가 만들어진다

워킹 트리는 프로젝트의 특정 버전을 Checkout 한것임. Git 디렉토리는 지금 작업하는 디스크에 있고 그 디렉토리 안에 압축된 데이터베이스에서 파일을 가져와서 워킹 트리를 만듬

Staging Area는 Git디렉토리에 있음. 단순한 파일이고 곧 커밋할 파일에 대한 정보를 저장함. GIt에서는 기술 용어로 Index라고 함

Git으로 하는 일은 기본적으로 세가지임

1. 워킹 트리에서 파일을 수정한다.
2. Staging Area에 파일을 stage해서 커밋할 스냅샷을 만든다. 모든 파일을 추가할 수도 있고 선택하여 추가할 수 있다.
3. staging Area에 있는 파일들을 커밋해서 Git 디렉토리에 영구적인 스냅샷으로 저장한다.

Git 디렉토리에 있는 파일들은 Committed 상태임. 팡리을 수정하고 Staging Area에 추가했으면 Staged임 그리고 Checkout 하고 나서 수젖ㅇ했지만 아직 Staging Area에 추가하지 않았다면 Modified임



### Git 최초 설정

Git을 설정하고 나면 사용 환경을 적정하게 설정해주어야 함

git config라는 도구로 설정 내용을 확인하고 변경 가능

git을 설치하고 나서 가장먼저 사용자 이름과 이메일 주소를 설정해야함. Git은 커밋할 떄마다 이 정보를 사용함.





## Git 용어



git clone을 통해 git 저장소를 만들고 워킹 디렉토리에 Checkouot도 하였으니 파일을 수정하고 파일의 스냅샷을 커밋하는 내용을 배운다.



워킹 디렉토리의 모든 파일은 크게 Tracked와 Untracked로 나뉨.

Tracked 파일은 이미 스냅샷에 포함돼 있던 파일임

Tracked파일은 또 Unmodified와  Modified 그리고 Staged 상태 중 하나임. 간단히 말하자면 Git이 알고 있는 파일

나머지 파일은 모두 Untracked 파일임. 워킹 디렉토리에 있는 파일 중 스냅샷에도 Staging Area에 포함되지 않은 파일임. 

처음 저장소를 Clone하면 모든 파일은 Tracked이면서 unmodified 상태임. 파일을 Checkout하고 나서 아무것도 수정하지 않았기 때문



마지막 커밋 이후 어떤 파일을 수정하면 Git은 그 파일은 Modified 상태로 인식함. 실제로 커밋을 하기 위해서는 이 수정한 파일을 Staged 상태로 만들고 이 상태의 파일을 커밋해야함

![image](https://user-images.githubusercontent.com/68668924/107845160-c64ce580-6e1c-11eb-9df2-d356d5fcf0b4.png) 



**파일의 상태 확인하기**

git status 명령을 이용해서 파일의 상태 확인 가능. 

현재 작업중인 브렌치를 알려주며, 서버의 같은 브랜치로 부터 진행된 작업을 알려줌

프로젝트에서 Readme 파일을 만든 후 git status를 입력하면

```
$ echo 'My Project' > README
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    README

nothing added to commit but untracked files present (use "git add" to track)
```

Reade 파일은 Untracked files 부분에 속해있음 이 파일이 unTracked 상태라는것을 말하며 아직 스냅샷에 넣어지지 않은 파일이라고 본다.



**파일을 새로 추적하기**

git add 명령으로 파일을 새로 추적할 ㅅ ㅜ있음

```
git add Readme
```

이후 다시 git status를 실행하면 Tracked 상태가 되면서 커밋에 추가될 Staged 상태라는 것을 확인할 수 있다.

```
$ git status
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    new file:   README
```

“Changes to be committed” 에 들어 있는 파일은 Staged 상태라는 것을 의미한다 

커밋하면 `git add` 를 실행한 시점의 파일이 커밋되어 저장소 히스토리에 남는다.

git add 명령은 파일 또는 디렉토리의 경로를 아규먼트로 받는다. 디렉토리면 아래에 있는 모든 파일들까지 재귀적으로 추가한다.



**Staged와 Unstaged 상태의 변경 내용을 보기**

어떤 내용이 변경되었는지 살펴보려면 git status가 아닌 git diff를 사용해야한다. 



**Staging Area 생략하기**

매번 git add를 하면 귀찮기 때문에 git commit 에 -a 옵션을 주어 tracked 상태의 파일을 자동으로 staging Area에 넣기 가능



git rm 으로 Tracked 상태의 파일을 삭제한 후에 커밋하면 워킹 디렉토리에 있는 파일도 삭제됨



## git 되돌리기

다시 커밋하고 싶으면 파일 수정 작업을 하고 Staging Area에 추가한 다음 --amend 옵션을 사용하여 커밋을 재작성할 수 있다.



## remote 저장소



git fetch를 하면 마지막으로 가져온 데이터 이후에 수정된 것을 모두 가져온다. git fetch 명령은 리모트 저장소의 데이터를 모두 로컬로 가져오지만, 자동으로 merge 하지는 않는다. 고로 로컬에서 하던 작업을 정리하고 나서 수동으로 Merge 해야한다.



git pull 명령으로 리모트 저장소에서 데이터를 가져올 뿐만 아니라. 자동으로 로컬 브랜치와 Merge 시킬 수 있다. 

git pull 명령은 clone한 서버에서 데이터를 가져오고 그 데이터를 자동으로 현재 작업하는 코드와 Merge시킨다.



git push 를 통하여 리모트 저장소에 push 할 수 있다.



git remote show <리모트 저장소 이름>을 통하여 리모트 저장소의 구체적인 정보를 볼 수 있따.



git remote rename 명령으로 리모트 저장소의 이름을 변경할 수 있따

ex) pb를 paul로 git remote rename pb paul



### git 태그

보통 릴리즈 할 때 사용한다.



git tag호 태그 조회 가능 





**태그 붙이기**

git의 태그는 lightWeight 태그와 Annotated 태그로 두 종류가 있음

lightwegiht 태그는 브랜치와 비슷한데 브랜치처럼 가리키는 지점을 최신 커밋으로 이동시키지 않음. 단순 특정 커밋에 대한 포인터일 뿐

annotated 태그는 git 데이터베이스에 태그를 만든사람 이름, 이메일과 태그를 만든 날짜, 그리고 태그 메세지도 저장함 GPG 서명도 가능. 일반적으로 Annotated 태그로 모든 정보를 사용하는 것이 좋음



**Annotated 태그**

tag 명령 실행할 때 -a 옵션을 사용하면됨 -m 옵션으로 메세지도 저장 가능 /. git show명령으로 태그 정보와 커밋 정보 확인가 능



```
$ git tag -a v1.4 -m "my version 1.4"
$ git tag
v0.1
v1.3
v1.4 
$ git show v1.4
tag v1.4
Tagger: Ben Straub <ben@straub.cc>
Date:   Sat May 3 20:19:12 2014 -0700

my version 1.4

commit ca82a6dff817ec66f44342007202690a93763949
Author: Scott Chacon <schacon@gee-mail.com>
Date:   Mon Mar 17 21:52:11 2008 -0700

    changed the version number
```



git push명령은 자동으로 리모트서버에 태그를 전송하지 않음. 태그를 만들었으면 서버에 별도로 push를 해ㅑㅇ함

git push origin (태그이름)을 실행함

```
$ git push origin v1.5
Counting objects: 14, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (12/12), done.
Writing objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.
Total 14 (delta 3), reused 0 (delta 0)
To git@github.com:schacon/simplegit.git
 * [new tag]         v1.5 -> v1.5
```

만일 한 번에 여러개 태그를 push하고 싶으면 --tags 옵션을 추가하여 push 명령을 수행하면 됨. 

```
$ git push origin --tags
Counting objects: 1, done.
Writing objects: 100% (1/1), 160 bytes | 0 bytes/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To git@github.com:schacon/simplegit.git
 * [new tag]         v1.4 -> v1.4
 * [new tag]         v1.4-lw -> v1.4-lw
```



태그를 Checkout하기 .

```
$ git checkout 2.0.0
Note: checking out '2.0.0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b <new-branch>

HEAD is now at 99ada87... Merge pull request #89 from schacon/appendix-final

$ git checkout 2.0-beta-0.1
Previous HEAD position was 99ada87... Merge pull request #89 from schacon/appendix-final
HEAD is now at df3f601... add atlas.json and cover image 
```

 태그를 체크아웃하면(브랜치를 체크아웃 하는 것이 아니라면) “detached HEAD”(떨어져나온 HEAD) 상태가 되며 일부 Git 관련 작업이 브랜치에서 작업하는 것과 다르게 동작할 수 있다. 

“detached HEAD”(떨어져나온 HEAD) 상태에서는 작업을 하고 커밋을 만들면, 태그는 그대로 있으나 새로운 커밋이 하나 쌓이 상태가 되고 새 커밋에 도달할 수 있는 방법이 따로 없게 된다. 물론 커밋의 해시 값을 정확히 기억하고 있으면 가능하긴 하다. 특정 태그의 상태에서 새로 작성한 커밋이 버그 픽스와 같이 의미있도록 하려면 반드시 브랜치를 만들어서 작업하는 것이 좋다. 

```
$ git checkout -b version2 v2.0.0
Switched to a new branch 'version2'
```

