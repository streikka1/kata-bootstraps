describe('Tower of Hanoi', () => {
    'use strict';

    const towerSize = 5;

    // Initial situation  
    // All disks are on source peg, sorted by size. 
    // Disk 1 is the smallest disk, i.e. at the end of a tower array  

    beforeEach(() => {
        this.myTower = new TowerOfHanoi(towerSize);
    });

    afterEach(() => {
        this.myTower.reset();
    });

    it(`starts with ${towerSize} disks on source tower`, () => {
        //let myTower = new TowerOfHanoi(towerSize); --> siehe before
        expect(this.myTower.source.length).toBe(towerSize);
    });

    it(`moves biggest disk ${towerSize} to target tower as bottom disk`, () => {
        //let myTower = new TowerOfHanoi(towerSize);
        towerFuncs.move(towerSize, this.myTower.source, this.myTower.target, this.myTower.aux);
        expect(this.myTower.target.indexOf(towerSize)).toBe(0);
    });

    it(`moves all disks from source to target, keeping the correct oder (smallest at the top)`, () => {
        //let myTower = new TowerOfHanoi(towerSize);
        let towerSourceTmp = myTower.source.slice();
        expect(towerFuncs.move(towerSize, this.myTower.source, this.myTower.target, this.myTower.aux)).toEqual(towerSourceTmp);
        expect(this.myTower.aux.length).toEqual(0);
    });

    describe('ToH Recursion', () => {

        it('moves disks n-1..1 to auxPeg via recusion', () => {
            //let myTower = new TowerOfHanoi(towerSize);
            // Use spy on first recursive call
            spyOn(towerFuncs, 'move').and.callThrough();
            towerFuncs.move(towerSize, this.myTower.source, this.myTower.target, this.myTower.aux);
            expect(towerFuncs.move.calls.argsFor(1)).toEqual([towerSize - 1, this.myTower.source, this.myTower.aux, this.myTower.target]);

        });

        it('never places a bigger disk on a smaller disk', () => {
            spyOn(towerFuncs, 'move').and.callThrough();
            towerFuncs.move(towerSize, this.myTower.source, this.myTower.target, this.myTower.aux);
            let sortingOk = true;
            // label 
           outerLoop:
            for (let index = 0; index < towerFuncs.move.calls.count(); index++) {
                //let argsOfRecursiveCall = towerFuncs.move.calls.argsFor(index);
                towerFuncs.move.calls.argsFor(index).forEach(element => {
                    if (Array.isArray(element) && element.length > 1) {
                        // Biggest disk should be at first position
                        if (element[0] < element[element.length - 1]) {
                            sortingOk = false;
                        }
                    }
                });
            }
            //One assertion per test case!
            expect(sortingOk).toBe(true);
        });
    });
});