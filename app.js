const {listFormL,listFormR,listFormSource} = require('./view')
const {printTable} = require('console-table-printer')

async function app (state,update,view) {
    const {model,currentView} = state
    const{title,table} = currentView

    console.clear()
    console.log(title)
    printTable(table)
    const {source} = await listFormSource(model)
    //update source
    if (source=='yes'){
        const{leftValue,leftUnit,rightUnit} = await listFormL(model)
        //update
    } else {
        const{rightValue,rightUnit,leftUnit} = await listFormR(model)
    }
    
}

module.exports = {
    app
}