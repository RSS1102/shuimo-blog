/**
 * @description
 * @author 阿怪
 * @date 2023/12/28 00:19
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { blogs } from '~/server/mocks/_mock_data_';

export default defineEventHandler(async (event) => {
  const { type } = getQuery(event);


  // mock data
  const data = blogs;


  const map: Record<string, Blog[]> = {};
  const years: number[] = [];
  if (data) {
    (data.data as Blog[]).filter(e => {
      if (type) {
        return e.type === type;
      }
      return true;
    }).forEach(blog => {
      const year = new Date(blog.createTime).getFullYear();
      if (!map[year]) {
        map[year] = [blog];
        years.push(year);
      } else {
        map[year].push(blog);
      }
    });
    return { map, years } ?? {};
  }
  return {
    map,
    years
  };
});
