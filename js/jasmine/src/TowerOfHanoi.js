let towerOfHanoi = {
    move(size, sourcePeg = [], targetPeg = [], auxPeg = []) {
        if (size > 0) {
            this.move(size - 1, sourcePeg, auxPeg, targetPeg);
            targetPeg.push(sourcePeg.pop());
            this.move(size - 1, auxPeg, targetPeg, sourcePeg);
            return targetPeg;
        }
    }
}
//towerOfHanoi.move(2, [2, 1]);