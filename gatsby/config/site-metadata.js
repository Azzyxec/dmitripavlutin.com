const siteUrl = 'https://dmitripavlutin.com';

module.exports = {
  siteUrl, // ensure compatibility with plugins that require `siteUrl`
  siteInfo: {
    title: 'Dmitri Pavlutin',
    description: 'I help developers understand Frontend technologies',
    metaTitle: 'Dmitri Pavlutin Blog',
    metaDescription:
      'Dmitri Pavlutin Blog is a place to learn about JavaScript, CSS, React, Vue and more on Frontend development',
    url: siteUrl,
    repositoryUrl: 'https://github.com/panzerdp/dmitripavlutin.com',
    githubCommentsRepository: 'panzerdp/dmitripavlutin.com-comments',
    googleCustomSearchId: '004443697379288327791:1zr8pgnumxn'
  },
  authorInfo: {
    name: 'Dmitri Pavlutin',
    description:
      'Tech writer and coach. My daily routine consists of (but not limited to) drinking coffee, coding, writing, coaching, overcoming boredom 😉.',
    job: '',
    email: 'dmitripavlutin@gmail.com',
    jobTitle: 'Software Developer',
    profiles: {
      stackoverflow: 'https://stackoverflow.com/users/1894471/dmitri-pavlutin',
      twitter: 'https://twitter.com/panzerdp',
      linkedin: 'https://www.linkedin.com/in/dmitri-pavlutin/',
      github: 'https://github.com/panzerdp',
      facebook: 'https://www.facebook.com/dmitripavlutin.dev',
    },
    nicknames: {
      twitter: 'panzerdp',
    },
  },
  emailSubscriptionService: {
    endpoint: 'https://dmitripavlutin.us13.list-manage.com/subscribe/post?u=7cedcb1f5ab74eb7c907e768e&id=75f44f92b9',
    hiddenFieldName: 'b_7cedcb1f5ab74eb7c907e768e_75f44f92b9',
  },
  carbonAdsService: {
    scriptSrc: '//cdn.carbonads.com/carbon.js?serve=CE7DT2QI&placement=dmitripavlutincom',
    isEnabled: true,
    isProductionMode: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod',
  },
  featured: {
    popularPostsByCategory: [{
      category: 'JavaScript',
      slugs: [
        'javascript-closure',
        'gentle-explanation-of-this-in-javascript',
        'differences-between-arrow-and-regular-functions'
      ]
    }, {
      category: 'React',
      slugs: [
        'react-useeffect-explanation',
        'react-usecallback',
        'use-react-memo-wisely',
      ]
    }]
  },
  affiliates: {
    inText: [{
      type: 'traversyReact',
      enabled: true,
      message: `
        <p>
          <em>
            Before I go on, let me recommend something to you.
          </em>
        </p>
        <p>
          <em>
            If you want to significantly improve your React knowledge, take the fantastic <a href="https://www.traversymedia.com/a/2147528895/FqXWyazh" target="_blank" rel="noopener noreferrer">"React Front To Back Course"</a> by Brad Traversy. Use the coupon code "DMITRI" and get 20% discount!
          </em>
        </p>`,
    }, {
      type: 'traversyJavaScript',
      enabled: true,
      message: `
        <p>
          <em>Before I go on, let me recommend something to you.</em>
        </p>
        <p>
          <em>
            If you want to significantly improve your JavaScript knowledge, take the amazingly useful course <a href="https://www.traversymedia.com/a/2147528886/FqXWyazh" target="_blank" rel="noopener noreferrer">"Modern JavaScript From The Beginning 2.0"</a> by Brad Traversy. Use the coupon code "DMITRI" and get 20% discount!
          </em>
        </p>`
    }, {
      type: 'vueschoolCompositionApi',
      enabled: true,
      message: `
      <p>
        <em>
        Before I go on, let me recommend something to you. If you want to truly understand how to use Vue composition API, take <a href="https://vueschool.io/courses/vue-3-composition-api?friend=dmitripavlutin" target="_blank" rel="noopener noreferrer">"Vue 3 Composition API"</a> course on Vueschool.
        </em>
      </p>`
    }, {
      type: 'vueschoolVue',
      enabled: true,
      message: `
      <p>
        <em>
        Before I go on, let me recommend something to you. If you want to become proficient in Vue, take ["Vue.js 3 Fundamentals with the Composition API"](https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api?friend=dmitripavlutin) course on Vueschool.
        </em>
      </p>
      `
    }],
    showVueschoolTopBanner: true
  }
};
