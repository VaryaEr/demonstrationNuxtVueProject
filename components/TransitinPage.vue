<template></template>

<script>
export default {
    data() {
        return {

        }
    },
    async created() {
        this.transitionAlllSections()
        window.onload = () => {
            this.transitionAlllSections()
        };
        const targetNode = document.getElementById('__nuxt');
        const config = { attributes: true, childList: true, subtree: true };
        const callback = () => {
            this.transitionAlllSections()

        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);

        this.addWindowListener()
    },
    methods: {
        addWindowListener() {
            window.addEventListener('scroll', (event) => {
                this.transitionAlllSections()
            })
        },
        transitionAlllSections() {
            let alllSections = document.getElementsByTagName('section')
            for (let i = 0; i < alllSections.length; i++) {
                let el = alllSections[i]
                let elPosition = {
                    top: window.pageYOffset + el.getBoundingClientRect().top
                },
                    windowPosition = {
                        bottom: window.pageYOffset + document.documentElement.clientHeight
                    };

                if (elPosition.top < windowPosition.bottom && !el.classList.contains('show-block')) {
                    el.classList.add('show-block')
                }
            }
        },
    }
}
</script>

<style>
section {
    opacity: 0;
    transition: opacity 1.5s ease !important;
}

.show-block {
    opacity: 1;
}
</style>