import dominate
from dominate.tags import *
import json

with open('../../data_dragon/11.10.1/data/en_US/championFull.json','r', encoding='utf-8') as f:
	championStats=json.loads(f.read())['data']

statsHeader=['Health','Health per level','Mana','Mana per level','Movement speed','Armor','Armor per level','MR','MR per level','Range','HP regen','HP regen per level','Mana regen','Mana regen per level','Crit','Crit per level','AD','AD per level','AS per level','AS']

def create_page(champName):
	stats=championStats[champName]
	doc=dominate.document(title=champName+' - LoL Companion')

	with doc.head:
		link(rel='stylesheet', href='../../style.css', type='text/css')
		link(rel='stylesheet', href='../champstyle.css', type='text/css')
		script(type='text/javascript', src='../../display.js')
		meta(charset='utf-8')

	with doc,div(cls='container'),div(cls='column'):
		h1(stats['name'])
		h3(stats['title'])
		img(src=('../../data_dragon/img/champion/loading/'+stats['id']+'_0.jpg'), cls='champImg', onclick='display(../../data_dragon/img/champion/loading/'+stats['id']+'_0.jpg)')
		h2('Class :')
		p(', '.join(stats['tags']))
		h2('Lore :')
		p(stats['lore'])
		h2('Stats :')
		with table(cls='statsTable'):
			with tr():
				for theader in statsHeader:
						th(theader)
			with tr():
				[td(stats['stats'][i]) for i in stats['stats']]
		with div(cls="spellResume"):
			with div(cls="spell"):
				img(cls="spellIcon", src='../../data_dragon/11.10.1/img/passive/'+stats['passive']['image']['full'])
				h3('Passive : '+stats['passive']['name'])
				p(stats['passive']['description'])





	with open(stats['name']+'.html','w') as f:
		f.write(doc.render())

#create_page('Aatrox')
[create_page(x) for x in championStats]