# CNU-Computer-Physics.github.io

충남대학교 2021년 집중학기(1) 전산물리학 교재개발을 위한 깃허브 조직의 메인페이지입니다.

담당교수: [강찬종](https://sites.google.com/view/cjkang-lab)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=3 orderedList=false} -->
<!-- code_chunk_output -->

- [기존 문서 편집 및 신규문서 생성](#기존-문서-편집-및-신규문서-생성)
  - [문서의 머릿말](#문서의-머릿말)
  - [문서의 내용](#문서의-내용)
- [개발환경](#개발환경)

<!-- /code_chunk_output -->

## 기존 문서 편집 및 신규문서 생성

각 챕터의 구조와 순서는 `_data/toc.yml`에 정의되어 있으며, 문서내용은 루트 디렉토리의  `docs/`에 있습니다.

`_data/toc.yml`는 디렉토리의 이름과 파일 이름을 가반으로 하며 웹사이트의 URL로도 확인할 수 있습니다.

문서 구조는 장/절의 형태(`docs/chapters/clauses.md`)로 되어 있습니다. 단, 장에 해당하는 문서의 내용은 `docs/chapters/index.md`입니다.

### 문서의 머릿말

머릿말은 문서 첫 머리에 두 개의 `---`로 감싼 블록입니다. 웹페이지 생성 엔진에 전달하는 변수를 담는 것으로 문서는 항상 이렇게 시작합니다.

```yaml
---
title: 목차에 보일 제목
---
```

### 문서의 내용

문서 내용은 마크다운 양식을 사용합니다. 정확히는 몇 개의 확장을 추가한 [kramdown](https://kramdown.gettalong.org/)을 사용합니다. 수식은 LaTeX 문법을 활용하는 [KaTeX](https://katex.org/)를 사용합니다.

## 개발환경

웹페이지 생성 엔진의 편집이 필요하다면 아래의 개발환경을 구성하여 

- [VSCode](https://code.visualstudio.com/)
- [Jekyll for Github](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
- [npm: tsc](https://www.typescriptlang.org/download)