const humberger = document.getElementById('humberger');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menu-close');
const menuItemsNode = document.getElementById('menu-items').childNodes;
const works = document.getElementById('works');

const showMenu = () => {
  menu.classList.add('show-menu');
};
const hideMenu = () => {
  menu.classList.remove('show-menu');
};
const showModal = (index) => {
  document.body.appendChild(parseVirtualDom(ModalVirtualDom(projects[index])));
};
const closeModal = () => {
  document.body.removeChild(document.getElementById('modal'));
};

humberger.addEventListener('click', showMenu);
menuClose.addEventListener('click', hideMenu);
menuItemsNode.forEach((menuItem) => menuItem.addEventListener('click', hideMenu));

const projects = [
  {
    title: 'Tonic',
    image: './assets/images/works.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    detailDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nemo adipisci, harum repudiandae eum mollitia id, blanditiis aut exercitationem expedita veritatis consectetur? Dolor laudantium dignissimos libero, obcaecati minus inventore ratione!',
  },
  {
    title: 'Multi-Post <br> Stories',
    image: './assets/images/work2.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    detailDescription: 'more detail',
  },
  {
    title: 'Tonic',
    image: './assets/images/works.svg',
    description: 'test',
    detailDescription: 'test 2',
  },
];
const ModalVirtualDom = (data) => (
  {
    type: 'div',
    id: 'modal',
    class: 'modal-wrapper',
    child: [
      {
        type: 'div',
        class: 'modal-content',
        child: [
          {
            type: 'div',
            class: 'modal-header',
            child: [
              {
                type: 'div',
                class: 'modal-title work-title',
                innerText: data.title,
              },
              {
                type: 'img',
                events: [
                  {
                    event: 'click',
                    handler: closeModal,
                  },
                ],
                src: './assets/images/close-icon.svg',
                class: 'modal-close',
                id: 'modal-close',
              },
            ],
          },
          {
            type: 'div',
            class: 'modal-secondary-header',
            child: [
              {
                type: 'div',
                class: 'work-info',
                child: [
                  {
                    type:'p',
                    class:'work-info-title',
                    innerText:'Canopy'
                  }, {
                    type: 'p',
                    class: 'work-info-separator'
                  },
                  {
                    type: 'p',
                    class: 'work-info-others',
                    innerText: 'Back End Dev'
                  },{
                    type: 'p',
                    class: 'work-info-separator'
                  },
                  {
                    type: 'p',
                    class: 'work-info-others',
                    innerText: 2015
                  }
                ]
              },
            ]

          },
          {
            type: 'img',
            src: data.image,
          },
          {
            type: 'div',
            class: 'work-description modal-body',
            innerText: data.detailDescription
          },
          {
            type: 'div',
            class: 'modal-work-stack',
            child: [
              {
                type: 'ul',
                class: 'work-stacks',
                child: [
                  {
                    type: 'li',
                    class: 'stack',
                    child:[
                      {
                        type: 'a',
                        innerText: 'HTML'
                      }
                    ]
                  },
                  {
                    type: 'li',
                    class: 'stack',
                    child: [
                      {
                        type: 'a',
                        innerText: 'Css'
                      },
                    ],
                  },
                  {
                    type: 'li',
                    class: 'stack',
                    child:[
                      {
                        type: 'a',
                        innerText: 'Javascript'
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'div',
            class: 'modal-work-separator'
          },
          {
            type: 'div',
            class: 'work-detail-link-container',
            child: [
              {
                type:'btn',
                class: 'work-link work-detail-link-btn',
                child: [
                  {
                    type: 'p',
                    innerText: 'See Live'
                  },
                  {
                    type:'img',
                    src: './assets/images/github.svg'
                  }
                ]
              },
              {
                type:'btn',
                class: 'work-link work-detail-link-btn',
                child: [
                  {
                    type: 'p',
                    innerText: 'See Source'
                  },
                  {
                    type:'img',
                    src: './assets/images/github.svg'
                  }
                ]
              }
            ]
          }
        ],
      },
    ],
  }
)
const WorkVirtualDom = (data) => (
  {
    type: 'div',
    class: 'work',
    child: [{
       type: 'div',
       class: 'work-image-container',
       child:[{ 
        type: 'img',
        src: data.image,
        class:'work-image'
      }],
    },
    {
      type:'div',
      class:'work-description-container',
      child: [
        {
          type:'h1',
          class:'work-title',
          innerText: data.title
        },
        {
          type: 'div',
          class: 'work-info',
          child: [
            {
              type:'p',
              class:'work-info-title',
              innerText:'Canopy'
            }, {
              type: 'p',
              class: 'work-info-separator'
            },
            {
              type: 'p',
              class: 'work-info-others',
              innerText: 'Back End Dev'
            },{
              type: 'p',
              class: 'work-info-separator'
            },
            {
              type: 'p',
              class: 'work-info-others',
              innerText: 2015
            }
          ]
        },
        {
          type: 'p',
          class: 'work-description',
          innerText: data.description,
        },
        {
          type: 'ul',
          class: 'work-stacks',
          child: [
            {
              type: 'li',
              class: 'stack',
              child:[
                {
                  type: 'a',
                  innerText: 'HTML'
                }
              ]
            },
            {
              type: 'li',
              class: 'stack',
              child: [
                {
                  type: 'a',
                  innerText: 'Css'
                },
              ],
            },
            {
              type: 'li',
              class: 'stack',
              child:[
                {
                  type: 'a',
                  innerText: 'Javascript'
                },
              ],
            },
          ],
        },
        {
          type: 'button',
          events: [{
            event: 'click',
            handler: () => showModal(data.index),
          }],
          class: 'work-link see-more-btn',
          innerText: 'See project'
        },
      ],
    },
    ],
  }
);
const parseVirtualDom = (virtualDom,parentElement=null) => {
  const { type,innerText,events, child, ...otherAttributes } = virtualDom;
  const domElement=document.createElement(type);
  if (otherAttributes && otherAttributes.class) {
    domElement.classList.add(...otherAttributes.class.split(' '));
    delete otherAttributes.class;
  }
  if(otherAttributes){
    for ( const attribute in otherAttributes) {
      domElement.setAttribute(attribute, otherAttributes[attribute])
    }
  }
  if(events&& events.length){
    events.forEach(item=>domElement.addEventListener(item.event,item.handler))
  }
  if(innerText) domElement.innerHTML=innerText;
  if(parentElement){
    parentElement.appendChild(domElement)
  }
  if(child&&child.length){
    child.forEach( (childVirtualDom) => parseVirtualDom(childVirtualDom,domElement))
  }
  return domElement;
};

projects.forEach((project,index) => works.appendChild(parseVirtualDom(WorkVirtualDom({...project, index}))));
