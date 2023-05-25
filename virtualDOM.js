const showModal = (index) => {
  document.body.appendChild(parseVirtualDom(ModalVirtualDom(projects[index])));
};
const closeModal = () => {
  document.body.removeChild(document.getElementById('modal'));
};

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
                    type: 'p',
                    class: 'work-info-title',
                    innerText: data.company,
                  }, {
                    type: 'p',
                    class: 'work-info-separator',
                  },
                  {
                    type: 'p',
                    class: 'work-info-others',
                    innerText: data.contribution,
                  }, {
                    type: 'p',
                    class: 'work-info-separator',
                  },
                  {
                    type: 'p',
                    class: 'work-info-others',
                    innerText: data.year,
                  },
                ],
              },
            ],

          },
          {
            type: 'div',
            class: 'project-image',
            child: [
              {
                type: 'img',
                src: data.image,
              },
            ],
          },
          {
            type: 'div',
            class: 'modal-body-container',
            child: [
              {
                type: 'div',
                class: 'work-description modal-body',
                innerText: data.detailDescription,
              },
              {
                type: 'div',
                class: 'stacks-link-container',
                child: [
                  {
                    type: 'div',
                    class: 'modal-work-stack',
                    child: [
                      {
                        type: 'ul',
                        class: 'work-stacks',
                        child: data.stacks.map((stack) => (
                          {
                            type: 'li',
                            class: 'stack',
                            child: [
                              {
                                type: 'a',
                                innerText: stack,
                              },
                            ],
                          }
                        )),
                      },
                    ],
                  },
                  {
                    type: 'div',
                    class: 'modal-work-separator',
                  },
                  {
                    type: 'div',
                    class: 'work-detail-link-container',
                    child: [
                      {
                        type: 'btn',
                        class: 'work-link work-detail-link-btn',
                        child: [
                          {
                            type: 'p',
                            innerText: 'See Live',
                          },
                          {
                            type: 'img',
                            src: './assets/images/live-icon.svg',
                          },
                        ],
                      },
                      {
                        type: 'btn',
                        class: 'work-link work-detail-link-btn',
                        child: [
                          {
                            type: 'p',
                            innerText: 'See Source',
                          },
                          {
                            type: 'img',
                            src: './assets/images/github-icon.svg',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }
);
const WorkVirtualDom = (data) => (
  {
    type: 'div',
    class: 'work',
    child: [{
      type: 'div',
      class: 'work-image-container',
      child: [{
        type: 'img',
        src: data.image,
        class: 'work-image',
      }],
    },
    {
      type: 'div',
      class: 'work-description-container',
      child: [
        {
          type: 'h1',
          class: 'work-title',
          innerText: data.title,
        },
        {
          type: 'div',
          class: 'work-info',
          child: [
            {
              type: 'p',
              class: 'work-info-title',
              innerText: data.company,
            }, {
              type: 'p',
              class: 'work-info-separator',
            },
            {
              type: 'p',
              class: 'work-info-others',
              innerText: data.contribution,
            }, {
              type: 'p',
              class: 'work-info-separator',
            },
            {
              type: 'p',
              class: 'work-info-others',
              innerText: data.year,
            },
          ],
        },
        {
          type: 'p',
          class: 'work-description',
          innerText: data.description,
        },
        {
          type: 'ul',
          class: 'work-stacks',
          child: data.stacks.map((stack) => (
            {
              type: 'li',
              class: 'stack',
              child: [
                {
                  type: 'a',
                  innerText: stack,
                },
              ],
            }
          )),
        },
        {
          type: 'button',
          events: [{
            event: 'click',
            handler: () => showModal(data.index),
          }],
          class: 'work-link see-more-btn',
          innerText: 'See project',
        },
      ],
    },
    ],
  }
);