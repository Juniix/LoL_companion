import dominate
from dominate.tags import *
import json
import os

with open('../../data_dragon/11.10.1/data/en_US/item.json','r', encoding='utf-8') as f:
	itemStats=json.loads(f.read())['data']

def create_page(itemName,itemID):
	stats=itemStats[itemName]
	doc=dominate.document(title=stats['name']+' - LoL Companion')

	with doc.head:
		link(rel='stylesheet', href='../../../style.css', type='text/css')
		link(rel='stylesheet', href='../../itemstyle.css', type='text/css')
		script(type='text/javascript', src='../../../display.js')
		script(type='text/javascript', src='../itempage.js', defer='defer')

		meta(charset='utf-8')

	with doc,div(cls='container'),div(cls='column',id='column'):
			span(itemID,id='itempage')


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
for x in itemStats:
	create_page(x,count)
	count+=1

#[create_page(x,y) for x in itemStats for y in range(len(itemStats))]