import dominate
from dominate.tags import *
import json

with open('../data_dragon/11.10.1/data/en_US/championFull.json','r', encoding='utf-8') as f:
	championStats=json.loads(f.read())['data']

def create_page(champName):
	stats=championStats[champName]
	doc=dominate.document(title=champName+' - LoL Companion')

	with doc.head:
		link(rel='stylesheet', href='../../style.css', type='text/css')
		link(rel='stylesheet', href='../champstyle.css', type='text/css')

	with doc,div(cls='container'),div(cls='column'):
		h1(stats['name'])

	return doc

print(create_page('Aatrox'))