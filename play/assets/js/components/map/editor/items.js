Vue.component('items', {
  props: ['items'],
  data: function () {
  	return {
  		item_id: null,
  		create_item_id: null,
  	}
  },
  template: ['<div class="items">',
        '<div class="field-row">',
          '<label>Select Item:</label> ',
          '<select v-model="item_id">',
            '<option v-for="item in items" :value="item.id">{{ item.id }} - {{ item.name }}</option>',
          '</select>',
          '<input type="button" @click="removeItem()" value="-" />', 
        '</div>',

        '<div class="field-row">',
          '<label>Create Item:</label> ',
          '<input type="text" v-model="create_item_id" placeholder="unique id"/>',
          '<input type="button" @click="createItem()" value="+" />',
        '</div>',

        '<active-item :item="items[item_id]" :items="items" v-if="items[item_id]"></active-item>',

      	'<div class="flex"><div>',
          '<form :action="getIpServer" method="POST" @submit.prevent="onSubmit">',
            '<textarea rows="5" cols="30" name="items">{{ items }}</textarea>',
            '<br /><input type="submit" value="Save Items"/>',
          '</form>',
          '<input type="button" value="Load Items" @click="load()"/>',
      	'</div></div>',
    '</div>'
  ].join(""),
  methods: {
    createItem: function () {
      if (this.create_item_id && !this.items[this.create_item_id]) {
        Vue.set(this.items, this.create_item_id, {
          id: this.create_item_id,
          name: this.create_item_id
        })

        this.item_id = this.create_item_id
      }
    },
    removeItem: function () {
      if (this.item_id) {
        Vue.delete(this.items, this.item_id)
      }
    },
    onSubmit: function () {
      ajaxSubmit("POST", this.getIpServer, JSON.stringify(this.items), null)
    },
    load: function () {
      ajaxSubmit("GET", this.getIpServer, null, function(data) {
        console.log(JSON.parse(data))
        Vue.set(config.db, "items", JSON.parse(data)) 
      })
    }
  },
  computed: {
    getIpServer: function () {
      return config.ip_server + '/item/'
    }
  }
})

Vue.component('activeItem', {
  props: ['item', 'items'],
  template: ['<div class="item flex flex-top">',
      '<div>',
        '<h4>Item:</h4> ',
        '<div class="field-row">',
          '<label>Id:</label> ',
          //'<input type="text" v-model="enemy.id" />',
          '<span>{{ item.id }}</span>',
        '</div>',

        '<div class="field-row">',
          '<label>Name:</label> ',
          '<input type="text" v-model="item.name" />',
        '</div>',

        '<div class="field-row">',
          '<label>Type:</label> ',
          '<select v-model="item.type">',
            '<option v-for="type in getItemTypes" :value="type">{{ type }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Class Type:</label> ',
          '<select v-model="item.class">',
            '<option v-for="type_class in getItemClasses" :value="type_class">{{ type_class }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Quality:</label> ',
          '<select v-model="item.quality">',
            '<option v-for="quality in getItemQualities" :value="quality">{{ quality }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Level:</label> ',
          '<input type="number" v-model.number="item.level" />',
        '</div>',

        '<div class="tiles-map">',
          '<div class="field-row">',
            '<label>Icon: </label> ',
            '<input type="text" v-model="item.icon" />',
          '</div>',
          '<span class="layer-event" style="zoom: 3; border: 0.2px solid #cecece;" :class="getIconClass" :style="getIconStyle"></span>',
        '</div>',

        // NOTE
        '<div v-if="item.type == \'note\'">',
          '<div class="field-row">',
            '<label>Note:</label> ',
            '<textarea v-model="item.text"></textarea>',
          '</div>',
        '</div>',

        '<div v-if="item.type == \'weapon\'">',
          '<div class="field-row">',
            '<label>Damage:</label> ',
            '<input type="number" v-model.number="item.damage" />',
          '</div>',
        '</div>',

        '<div v-if="item.class == \'potion\'">',
          '<div class="field-row">',
            '<label>Health:</label> ',
            '<input type="number" v-model.number="item.health" />',
          '</div>',
          '<div class="field-row">',
            '<label>Mana:</label> ',
            '<input type="number" v-model.number="item.mp" />',
          '</div>',
        '</div>',

        '<div v-if="item.type == \'weapon\' || item.type == \'gear\'">',
          '<div class="field-row">',
            '<label>Defence:</label> ',
            '<input type="number" v-model.number="item.defence" />',
          '</div>',

          '<div class="field-row">',
            '<label>Strength:</label> ',
            '<input type="number" v-model.number="item.strength" />',
          '</div>',

          '<div class="field-row">',
            '<label>Agility:</label> ',
            '<input type="number" v-model.number="item.agility" />',
          '</div>',

          '<div class="field-row">',
            '<label>Stamina:</label> ',
            '<input type="number" v-model.number="item.stamina" />',
          '</div>',

          '<div class="field-row">',
            '<label>Intellect:</label> ',
            '<input type="number" v-model.number="item.intellect" />',
          '</div>',
        '</div>',

        '<div class="field-row">',
          '<label>Price:</label> ',
          '<input type="number" v-model.number="item.price" />',
        '</div>',

      '</div>',
    '</div>'
  ].join(""),
  computed: {
    getItemTypes: function () {
      return config.db.item_types
    },
    getItemQualities: function () {
      return config.db.item_qualities
    },
    getItemClasses: function () {
      return config.db.item_classes
    },
    getIconStyle: function () {
      let data = {}
      if (this.item.icon) {
        data['background-image'] = 'url(' + this.item.icon + ')'
      }

      return data
    },
    getIconClass: function () {
      let data = {}
      if (this.item.quality) {
        data[this.item.quality] = true
      }

      return data      
    }
  }
})