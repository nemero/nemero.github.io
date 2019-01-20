function isVisibleTileEvent (tile) {
  if (tile.id == "player" && config.character.id == tile.player_id) {
    return false
  }

	// check conditions if exist
	if (tile.conditions && tile.conditions.length > 0) {
		if (!isTrueConditions(tile.conditions)) {
			return false
		}
	}

	if (tile.hidden || tile.cooldown_left > config.step) {
		return false
	}

	return true
}

function isTrueConditions(conditions) {
	for (condition_idx in conditions) {
	  let condition = conditions[condition_idx]
	  if (condition.type == "exist_tile") {
	    if (config.db.map[condition.map].map[condition.position[1]][condition.position[0]][condition.layer_id].id != condition.tile.id) {
	      return false
	    }
	  }

	  if (condition.type == 'world_state') {
	  	let world_state = config.character.world_state

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

	return true
}

function activeWorldStates() {
	let world_states = []

  for (layer_id in config.db.mapList) {
    let layer = config.db.mapList[layer_id].layerEvents

    for (row_id in layer) {
      let rows = layer[row_id]

      for (col_id in rows) {
        let cols = rows[col_id]

        for (event_id in cols) {
          let event = cols[event_id]
          if (event.interactions) {
            for (interaction_id in event.interactions) {
              let interaction = event.interactions[interaction_id]
              for (choice_id in interaction.choices) {
                let choice = interaction.choices[choice_id]
                if (choice.state) {
                  for (state_id in choice.state) {
                    let state = choice.state[state_id]
                    if (world_states.indexOf(state) < 0) {
                      world_states.push(state)
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return world_states.sort()
}