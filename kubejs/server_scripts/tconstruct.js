// priority: 0

console.info('-KubeJS- Tinkers\' Construct server script loaded.')

ServerEvents.recipes(event => {
	//remove slimelytra due to redundancy
	event.remove({id:'tconstruct:tools/armor/slimelytra'})
	//processing for crushed raw cobalt
	event.custom({
		type: 'tconstruct:melting',
		ingredient: {item:'kubejs:crushed_raw_cobalt'},
		result: {
			amount: 90,
			tag: 'forge:molten_cobalt'
		},
		temperature: 950,
		time: 64
	})
})