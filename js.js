class buch {

    autor
    verlag
    titel
    anzahl

    constructor(writer , publisher , name , exemplare) {
        this.anzahl = exemplare
        this.autor = writer
        this.titel = name
        this.verlag = publisher
    }
}

function testBuch() {

    let Taschenbuch = new buch("disney" , "lustigesTB" , "Goldrausch" , 100)
    
}