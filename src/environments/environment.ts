// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiHost: 'https://rqdqmry09e.execute-api.us-east-1.amazonaws.com/v1',
  contactUs: '/contact',
  upcomingCourses: '/classes/upcoming',
  categories: '/categories',
  classes: '/classes/',
  upcomingRelated: '/classes/upcoming?class_id=',
  locations: '/locations',
  coursesList: '/courses',
  orders: '/orders',
  checkout: '/checkout',
  waivers: '/waivers?class_id=',
  registrations: '/registrations',
};
