describe('Tower of Hanoi', () => {
    const towerSourceName = "sourcePeg";
    const towerTargetName = "auxPeg";
    const towerAuxName = "targetPeg";

    // Initial situation (beforeEach?) 
    // All disks are on source peg, sorted by size. 
    // Disk 1 is the smallest disk, i.e. at the top 
    let towerSource = [1, 2, 3, 4, 5];
    let towerTarget = [];
    let towerAux = [];

    let biggestDisk = towerSource.length;

        it('moves biggest Disk to target tower', () => {
            // At first biggest Disk is on source tower
            expect(towerSource.indexOf(biggestDisk)).not.toBe(-1);
            expect(towerTarget.indexOf(biggestDisk)).toBe(-1);
            moveTowerofHanoi(biggestDisk, towerSource, towerTarget, towerAux);
            // moveTowerOfHanou moves biggest disk to target tower
            expect(towerSource.indexOf(biggestDisk)).toBe(-1);
            expect(towerTarget.indexOf(biggestDisk)).not.toBe(-1);
        });

});