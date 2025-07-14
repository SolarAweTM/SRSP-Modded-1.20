// priority: 0

console.info('-KubeJS- Silent Gear server script loaded.')

ServerEvents.recipes(event => {
	//remove armor and elytra recipes from silent gear
	event.remove({output:'silentgear:helmet_blueprint'})
	event.remove({output:'silentgear:chestplate_blueprint'})
	event.remove({output:'silentgear:leggings_blueprint'})
	event.remove({output:'silentgear:boots_blueprint'})
	event.remove({output:'silentgear:elytra_blueprint'})
	event.remove({output:'silentgear:helmet_template'})
	event.remove({output:'silentgear:chestplate_template'})
	event.remove({output:'silentgear:leggings_template'})
	event.remove({output:'silentgear:boots_template'})
	event.remove({output:'silentgear:elytra_template'})
	event.remove({output:'silentgear:lining_blueprint'})
	event.remove({output:'silentgear:lining_template'})
	event.remove({output:'silentgear:lining'})
	event.remove({output:'silentgear:helmet'})
	event.remove({output:'silentgear:chestplate'})
	event.remove({output:'silentgear:leggings'})
	event.remove({output:'silentgear:boots'})
	event.remove({output:'silentgear:elytra'})
	//remove fishing rod in favor of aquaculture's mechanics
	event.remove({output:'silentgear:fishing_rod'})
	event.remove({output:'silentgear:fishing_rod_blueprint'})
	event.remove({output:'silentgear:fishing_rod_template'})
	event.remove({output:'silentgear:fishing_reel_and_hook'})
})