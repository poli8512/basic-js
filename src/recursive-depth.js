const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr,depth = 0, count = 0) {
        if (Array.isArray(arr)) {
            for (let i = 0; i < arr.length; i++) {
                count = this.calculateDepth(arr[i]);
                if (count > depth) {
                    depth = count;
                    count = 0;
                }
            }
            return depth + 1;
        } else {
            return 0;
        }
    }
};