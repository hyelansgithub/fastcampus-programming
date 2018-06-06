### 01. Server & Client Architechture

#### 1. Client
- 브라우져를 통해 서버에 데이터를 요청

#### 2. Server

- 클라이언트가 요청한 데이터를 전송

- - - 

### 02. URL (Uniform Resourse Locator)

- 정형화된 리소스 위치표시

protocol, subdomain, domain, port, path, page, query, fragment

#### 1. protocol 프로토콜

- 컴퓨터나 네트워크 장비가 서로 통신하기 위해 미리 정해 놓은 약속, 규약

http://, ftp:, file:, mailto: ...

ftp: : 파일을 업로드하거나 다운로드할 때 사용하는 프로토콜

#### 2. subdomain

- URI vs URL
    - URI : 특정 사이트에 접속하기 위해 인터넷 주소창에 적는 문자열 모두 URI
    - URL : 도메인에 있는 파일을 여는 것
    - URI = URL + URN
    
    - www.google.com/preview.php (URI URL)
    - www.google.com/users?id=hyelan (URI)

- - -

### 03. Get & Post 방식

- 클라이언트가 URL을 브라우저 주소창에 작성하면 HTTP 패킷을 만들어서 서버로 요청한다. 서버는 HTTP 패킷의 정보를 바탕으로 응답을 한다.

- HTTP 패킷 : HTTP 프로토콜과 인터넷을 사용해서 보내는 데이터, 클라이언트가 서버로 요청을 할 때 보내는 데이터, 헤더와 바디 2부분으로 나뉨
    - 헤더 : 7가지 HTTP메서드 방식 중 무엇을 썼는지, 클라이언트의 정보, 브라우저의 정보, 접속할 URL 등 클라이언트 정보를 담는다.
    - 바디 : 보통 비어있다. 하지만 특정 데이터를 담아서 서버에게 요청을 보낼 수 있다.

- 패킷 : 인터넷을 통해 한 번에 전송하는 정보의 단위

- 서버에 요청시 필요한 정보를 어디에 넣느냐 따라서 2가지로 나뉨 : Get, Post
    - 로그인을 할때 아이디와 비밀번호 정보를 제공하는 것처럼, 서버에 요청시 정보가 필요할 수 있다.

#### 1. Get 방식

- HTTP 패킷의 헤더 중 URL query에 데이터가 포함
- query의 key, value가 결합되어 서버에 전달
    - http://www.naver.com/news?title=경제
- <Form> Tag 의 Attribute 값으로 Get을 입력
- DB에 추가로 정보를 처리하지 않고, 저장된 Data를 단순 요청할 때 많이 사용


#### 2. Post 방식

- HTTP 패킷의 바디에 데이터가 포함

- - -

### 04. Internet 인터넷

- 인터넷은 컴퓨터로 연결하여 TCP/IP (Transmission Control Protocol/Internet Protocol)라는 통신 프로토콜을 이용해 전세계의 네트워크를 하나로 연결해서 정보를 주고받는 광역 네트워크

- ISP는 고속의 인터넷 회선에 직접 연결 되어 인터넷 서비스를 제공하는 기관, KT SK 등

- 인터넷을 이용하면서 웹 사이트를 접속하는 방법은 총 두가지 : IP주소, 도메인 네임
    
#### 1. IP주소 (Internet Protocol Address)
- 인터넷에 연결된 장치들이 네트워크 상에서 서로 통신을 하기 위해 가지고 있는 고유한 번호
    - 129.0.0.1
    - 더 이상 남은 IP주소가 없어서 IPv6를 사용한다. 2의 128승
    
#### 2. 도메인 네임(DNS; Domain Name System) 
- IP 기억하기 어려워서 IP에 이름을 부여
- 도메인 : 컴퓨터의 이름, 최상위 도메인 으로 이루어져 있음
    - www(호스트).google(컴퓨터 이름).com(최상위 도메인)
    - 대부분 도메인 선점이 된 상태
    - 도메인 구입 후 도메인과 호스트의 IP를 연결해줘야 한다. (호스트 설정)
    - 호스트 : 네트웍에 연결되어 있는 컴퓨터들
    - 하나의 도메인이 여러 호스트를 가리키게 할 수 있다.
            
- 도메인 vs URL
    - 도메인 : 서비스가 운영되고 있는 컴퓨터를 식별하기 위한 단위
    - URL : 서버가 가지고 있는 다양한 컨텐츠들을 구별하기 위한 식별자

        - www.google.com(도메인), https://books.google.co.kr/books?id=wqeVv09Y6hIC&printsec(URL)

- - -

### 05. OSI 7 Layer 

- - - 

### 06. Cookie / Session / Cache 쿠키, 세션, 캐쉬
- HTTP 프로토콜은 상태를 저장할 수 없다. (클라이언트의 요청이 왔을 때 응답해주고 연결을 끊는다. 하지만 정보 필요하다.)

- 저장 장소에 따라 2가지로 나뉜다.
    - 클라이언트에 저장 : Cookie
    - 웹 서버에 저장 : Session
    
#### 1. Cookie 쿠키
- 클라이언트에 대한 정보를 클라이언트 PC의 하드에 보관하기 위해서 웹 사이트에서 클라이언트의 웹브라우저에 전송하는 문자열 데이터
- 특정 웹사이트나 웹페이지에 몇번 방문했는지, 검색시 키워드 정보 등을 저장
- 기한이 만료되면 자동으로 삭제된다.

#### 2. Session 세션
- 일정 시간동안 같은 사용자로부터 들어오는 일련의 요구를 하나의 상태로 보고, 그 상태를 일정하게 유지시키는 기술
- 방문자가 웹 서버에 접속해 있는 상태를 하나의 단위로 보고 세션이라 칭함
- 브라우져와 연결시 각 클라이언트마다 고유의 Session ID를 부여
- 자신만의 고유한 페이지를 열기 때문에 보안상의 문제 해결능력이 있다.

#### 3. Cache 캐시
- 데이터나 값을 미리 복사해 임시로 저장해두는 장소

- 디스크캐시(디스크 버퍼)

- 웹 브라우저 캐시

- - -

### 07. HTTP Status Code


- - -

### 08. Web Language & Framework


- - -

### 09. Scraping & Crawling & Spider & Bot



