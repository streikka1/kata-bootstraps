function moveTowerofHanoi(n, sourcePeg = [], targetPeg = [], auxPeg = []) {
   if (n > 0) {
    // moveTowerofHanoi(n - 1, sourcePeg, auxPeg, targetPeg)
        targetPeg.push(sourcePeg.pop());
   }
}