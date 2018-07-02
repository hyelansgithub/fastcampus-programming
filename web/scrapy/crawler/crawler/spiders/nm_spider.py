import scrapy
from crawler.items import CrawlerItem

class MovieSpider(scrapy.Spider):
    name = "NaverMovie"
    allow_domain = ["http://movie.naver.com"]
    start_urls = [
        "https://movie.naver.com/movie/running/current.nhn"#크롤링할 스타트 url
    ] # 3개의 변수를 선언해줘야한다.

# 링크를 가져오는 함수, 함수이름 꼭 지켜줘야한다.
def parse(self, response):
    # start_urls가 request 되어서 받은 response가 아규먼트로 들어간다.
    links = response.xpath('//*[@id="content"]/div[1]/div[1]/div[3]/ul/li/dl/dt/a/@href')[:10].extract()
    for link in links:
        link = response.urljoin(link) # urljoin : 도메인이 추가된 link 가 완성이 된다.\
        yield scrapy.Request(link, callback=self.parse_page_contents) #link를 request한 후, response받아서 parse_page_contents 함수를 실
        # yield 를 통해서 실행되는 순서대로 결과값이 달라진다.

def parse_page_contents(self, response):
    item = CrawlerItem() # item이라는 객체 생성, item.py에서 가져오는 item이다.

    item["title"] = response.xpath('//*[@id="content"]/div[1]/div[2]/div[1]/h3/a[1]/text()').extract()[0]
    try:
        item["count"] = response.xpath('//*[@id="content"]/div[1]/div[2]/div[1]/dl/dd[5]/div/p[2]/text()').extract()[0]
    except :
        item["count"] = "0명"
    yield item
