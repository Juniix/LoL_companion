import dominate
from dominate.tags import *
import json
import os

with open('../../data_dragon/11.10.1/data/en_US/championFull.json','r', encoding='utf-8') as f:
	championStats=json.loads(f.read())['data']

statsHeader=['Health','Health per level','Mana','Mana per level','Movement speed','Armor','Armor per level','MR','MR per level','Range','HP regen','HP regen per level','Mana regen','Mana regen per level','Crit','Crit per level','AD','AD per level','AS per level','AS']

def create_page(champName,champID):
	stats=championStats[champName]
	doc=dominate.document(title=champName+' - LoL Companion')

	with doc.head:
		link(rel='stylesheet', href='../../../style.css', type='text/css')
		link(rel='stylesheet', href='../../champstyle.css', type='text/css')
		script(type='text/javascript', src='../../../display.js')
		script(type='text/javascript', src='../champpage.js', defer='defer')

		meta(charset='utf-8')

	with doc,div(cls='container'),div(cls='column',id='column'):
			span(champID,id='champpage')


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
for x in championStats:
	create_page(x,count)
	count+=1

#[create_page(x,y) for x in championStats for y in range(len(championStats))]