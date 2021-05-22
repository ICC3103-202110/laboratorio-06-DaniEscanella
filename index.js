const {initModel} = require('./model')
const {updateL,updateR} = require('./update')
const {view} = require('./view')
const {app} = require('./app')

const state = {
    model: initModel,
    currentView: view(initModel)
}

app(state, updateL, updateR, view)