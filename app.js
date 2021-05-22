const {listFormL,listFormR,listFormSource} = require('./view')
const {printTable} = require('console-table-printer')


async function app (state,updateL,updateR,view) {
    while (true){
        const {model,currentView} = state
        const{title,table} = currentView

        console.clear()
        console.log(title)
        printTable(table)

        const {source} = await listFormSource(model)
        if (source=='yes'){
            const{leftValue,leftUnit,rightUnit} = await listFormL(model)
            const updatedModel = updateL(leftValue,leftUnit,rightUnit,model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        } else {
            const{rightValue,rightUnit,leftUnit} = await listFormR(model)
            const updatedModel = updateR(rightValue,rightUnit,leftUnit,model)
            state = {
                ...state,
                model: updatedModel,
                currentView: view(updatedModel)
            }
        }
        console.clear()
    }
    
}

module.exports = {
    app
}