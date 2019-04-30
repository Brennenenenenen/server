import scrapy
from scrapy_splash import SplashRequest

from scrapy.selector import Selector

class EpocratesSpider(scrapy.Spider):
    name = 'epocrates'
    
    script= '''
function main(splash, args)
  assert(splash:go(args.url))
  assert(splash:wait(0.5))
  treat=require('treat')
  result = {}
  	assert(splash:runjs('document.querySelector("#drugClass36").click()'))
    result[1]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs('document.querySelector("#drugClass281").click()'))
    result[2]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs('document.querySelector("#drugClass582").click()'))
    result[3]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass282").click()'))
    result[4]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass602").click()'))
    result[5]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass583").click()'))
    result[6]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass341").click()'))
    result[7]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass346").click()'))
    result[8]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass35").click()'))
    result[9]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass285").click()'))
    result[10]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass354").click()'))
    result[11]= splash:html()
    assert(splash:wait(0.5))
    assert(splash:runjs(' document.querySelector("#drugClass284").click()'))
    result[12]= splash:html()
    assert(splash:wait(0.5))
   	assert(splash:runjs(' document.querySelector("#drugClass283").click()'))
    result[13]= splash:html()
    assert(splash:wait(0.5))
  return treat.as_array(result)
end
    '''

    def start_requests(self):
        url= 'https://online.epocrates.com/noFrame/showPage?method=drugs&MonographId=-1'
        yield SplashRequest(url=url, callback=self.parse, endpoint='render.html', args={'wait': 0.5})
        yield SplashRequest(url=url, callback=self.parse_other_pages, endpoint='execute', args={'wait': 0.5, 'lua_source': self.script}, dont_filter=True)
    

    def parse(self, response):
        for tr in response.xpath("//a[@class='classlist']"):
            yield {
                'link': tr.xpath(".//@href").extract_first()
            }
    

    def parse_other_pages(self, response):
        for page in response.data:
            sel= Selector(text=page)
            for tr in sel.xpath("//a[@class='classlist']"):
                yield {
                    'link': tr.xpath(".//@href").extract_first()
}