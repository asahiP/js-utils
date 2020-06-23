/**
 * 当参数数量为 1 时，参数为最大值；
 *             2 时，参数为最小值，最大值；
 *             3 时，参数为最小值，最大值，步进值。
 * 前两个参数会被重新排序，确保参数1必然小于参数2
 */
export declare function range(...args: number[]): number[];
