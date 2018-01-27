describe('Tower of Hanoi', () => {
    const towerSourceName = "sourcePeg";
    const towerTargetName = "auxPeg";
    const towerAuxName = "targetPeg";
    const towerSize = 5;

    // Initial situation  
    // All disks are on source peg, sorted by size. 
    // Disk 1 is the smallest disk, i.e. at the end of a tower array  
    let towerSource = [];
    let towerTarget = [];
    let towerAux = [];
    let biggestDisk = towerSize

    beforeEach(() => {
        for (let index = towerSize; index >= 1; index--) {
            towerSource.push(index);
        }
        towerTarget = [];
        towerAux = [];
        // Create test object to track recursive function calls via spies 
        spyOn(towerOfHanoi, 'move').and.callThrough();
    });

    afterEach(() => {
        towerSource = [];
    });

    it(`starts with ${towerSize} disks on source tower`, () => {
        expect(towerSource.length).toBe(towerSize);
    });

    it(`moves biggest disk ${biggestDisk} to target tower as bottom disk`, () => {
        towerOfHanoi.move(towerSize, towerSource, towerTarget, towerAux);
        expect(towerTarget.indexOf(biggestDisk)).toBe(0);
    });

    it(`moves all disks from source to target, keeping the correct oder (smallest at the top)`, () => {
        let towerSourceTmp = towerSource.slice();
        expect(towerOfHanoi.move(towerSize, towerSource, towerTarget, towerAux)).toEqual(towerSourceTmp);
    });

    it('moves disks n-1..1 to auxPeg via recusion', () => {
        // Use spy on first recursive call
        towerOfHanoi.move(towerSize, towerSource, towerTarget, towerAux);
        expect(towerOfHanoi.move.calls.argsFor(1)).toEqual([towerSize - 1, towerSource, towerAux, towerTarget]);
    });

});