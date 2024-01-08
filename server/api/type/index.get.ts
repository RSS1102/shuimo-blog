/**
 * @description
 * @author 阿怪
 * @date 2024/1/2 21:48
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import axios from 'axios';

export default defineEventHandler(async () => {
  const data = await axios('http://localhost:8619/type/list');
  if (data) {
    return data.data ?? [];
  }
  return [];
});