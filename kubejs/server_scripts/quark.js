// priority: 0

console.info('-KubeJS- Quark server script loaded.')

ServerEvents.recipes(event => {
	//make corundum craftable
	event.shapeless(Item.of('quark:red_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/red'])
	event.shapeless(Item.of('quark:orange_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/orange'])
	event.shapeless(Item.of('quark:yellow_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/yellow'])
	event.shapeless(Item.of('quark:green_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/green'])
	event.shapeless(Item.of('quark:blue_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/light_blue'])
	event.shapeless(Item.of('quark:indigo_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/blue'])
	event.shapeless(Item.of('quark:violet_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/magenta'])
	event.shapeless(Item.of('quark:white_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/white'])
	event.shapeless(Item.of('quark:black_corundum_cluster'), ['minecraft:quartz', '#forge:dyes/black'])
	event.stonecutting('quark:red_corundum', 'quark:red_corundum_cluster')
	event.stonecutting('quark:orange_corundum', 'quark:orange_corundum_cluster')
	event.stonecutting('quark:yellow_corundum', 'quark:yellow_corundum_cluster')
	event.stonecutting('quark:green_corundum', 'quark:green_corundum_cluster')
	event.stonecutting('quark:blue_corundum', 'quark:blue_corundum_cluster')
	event.stonecutting('quark:indigo_corundum', 'quark:indigo_corundum_cluster')
	event.stonecutting('quark:violet_corundum', 'quark:violet_corundum_cluster')
	event.stonecutting('quark:white_corundum', 'quark:white_corundum_cluster')
	event.stonecutting('quark:black_corundum', 'quark:black_corundum_cluster')
})