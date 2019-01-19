function isVisibleTileEvent (tile) {
  if (tile.id == "player" && config.character.id == tile.player_id) {
    return false
  }

	// check conditions if exist
	if (tile.conditions && tile.conditions.length > 0) {
		for (condition_idx in tile.conditions) {
		  let condition = tile.conditions[condition_idx]
		  if (condition.type == "exist_tile") {
		    if (config.db.map[condition.map].map[condition.position[1]][condition.position[0]][condition.layer_id].id != condition.tile.id) {
		      return false
		    }
		  }

		  if (condition.type == 'world_state') {
		    if (condition.has) {
		      for (state_id in condition.has) {
		        let state = condition.has[state_id]
		        if (world_state.indexOf(state) < 0) {
		          return false
		        }
		      }
		    }
		    if (condition.not) {
		      for (state_id in condition.not) {
		        let state = condition.not[state_id]
		        if (world_state.indexOf(state) >= 0) {
		          return false
		        }
		      }
		    }
		  }

		  if (condition.type == "items") {
		    let bag = config.character.bag

		    if (condition.has) {
		      for (item_id in condition.has) {
		        let item = condition.has[item_id]
		        if (bag.indexOf(item) < 0) {
		          return false
		        }
		      }
		    }
		    if (condition.not) {
		      for (item_id in condition.not) {
		        let item = condition.not[item_id]
		        if (bag.indexOf(item) >= 0) {
		          return false
		        }
		      }
		    }
		  }
		}
	}

	if (tile.hidden || tile.cooldown_left > config.step) {
		return false
	}

	return true
}