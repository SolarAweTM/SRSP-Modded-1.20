// priority: 0

console.info('-KubeJS- Tinkers\' Construct server script loaded.')

ServerEvents.recipes(event => {
	//remove slimelytra due to redundancy
	event.remove({id:'tconstruct:tools/armor/slimelytra'})
})