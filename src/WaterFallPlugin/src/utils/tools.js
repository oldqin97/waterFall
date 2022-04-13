/*
 * @Author: qin
 * @Date: 2022-04-07 01:52:54
 * @LastEditTime: 2022-04-13 12:40:16
 * @FilePath: \water-fall\src\WaterFallPlugin\src\utils\tools.js
 *  -> The best way to explain it is to do it
 */

export function getMinIndex(arr) {
  return Array.prototype.indexOf.call(arr, Math.min.apply(null, arr));
}
