import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
      form: {
        name: "basic sheme",
        fields: [
          {
            key: "key",
            type: "text",
            label: "a cool label"
          },

          {
"key": "role",
"label": "Роль",
"type": "select",
"validation": {
"required": true
},
"options": [
{
"key": "admin",
"value": "Администратор"
},
{
"key": "manager",
"value": "Менеджер"
}
]
},
        ]
      }
     
    },
    reducers: {
      addForm: (state, action) => { state.form.fields = action.payload },
      addKey: (state, action) => { state.key= action.payload },
      addLabel: (state, action) => { state.label = action.payload },
      addType: (state, action) => { state.type = action.payload }
    }
})


export  const reducer = rootSlice.reducer

export const { addForm, addKey, addLabel, addType } = rootSlice.actions