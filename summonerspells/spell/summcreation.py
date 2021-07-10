import dominate
from dominate.tags import *
import json
import os

with open('../../data_dragon/11.10.1/data/en_US/summoner.json','r', encoding='utf-8') as f:
	summonerStats=json.loads(f.read())['data']

def create_page(summName,summID):
	stats=summonerStats[summName]
	doc=dominate.document(title=stats["name"]+' - LoL Companion')

	with doc.head:
		link(rel='stylesheet', href='../../../style.css', type='text/css')
		link(rel='stylesheet', href='../../summstyle.css', type='text/css')
		script(type='text/javascript', src='../../../display.js')
		script(type='text/javascript', src='../summpage.js', defer='defer')

		meta(charset='utf-8')

	with doc,div(cls='container'),div(cls='column',id='column'):
			span(summID,id='summpage')


	dirName = stats["name"]
	try:
	    # Create target Directory
	    os.mkdir(dirName)
	    print("Directory " , dirName ,  " Created ")
	except FileExistsError:
	    print("Directory " , dirName ,  " already exists")

	with open(stats["name"]+'/index.html','w') as f:
		f.write(doc.render())

#create_page('Aatrox')
count = 0
for x in summonerStats:
	create_page(x,count)
	count+=1

#[create_page(x,y) for x in summonerStats for y in range(len(summonerStats))]