'use strict';

// Constructor pattern  
function TowerOfHanoi(size) {

    // Init source peg
    // biggest disk is on the left (i.e. first position in array)
    this.source = [];
    for (let index = size; index >= 1; index--) {
        this.source.push(index);
    }
    this.target = [];
    this.aux = [];

    this.reset = () => {
        this.source = [];
        this.target = [];
        this.aux = [];
    }
}

// Function created within object to be able to spy on
let towerFuncs = {
    move(size, sourcePeg = [], targetPeg = [], auxPeg = []) {
        if (size > 0) {
            this.move(size - 1, sourcePeg, auxPeg, targetPeg);
            targetPeg.push(sourcePeg.pop());
            this.move(size - 1, auxPeg, targetPeg, sourcePeg);
            return targetPeg;
        }
    }
}