/** @odoo-module **/
import {FormRenderer} from "@web/views/form/form_renderer";
import {patch} from "@web/core/utils/patch";
import {onMounted} from "@odoo/owl";
patch(FormRenderer.prototype, {
    setup() {
        super.setup(...arguments);
        onMounted(() => this._mounted());
    },
    _mounted() {
        // Odoo 18 : jQuery ($) a été ENTIÈREMENT retiré des assets (en 17 seul
        // le plugin jQuery UI .resizable manquait, $ existait encore). Un appel
        // direct `$(...)` lève donc `ReferenceError: $ is not defined` dans
        // onMounted -> OwlError qui fait planter le rendu de TOUTES les vues
        // formulaire. On garde d'abord l'existence de $ (typeof ne lève pas sur
        // un identifiant non déclaré). Feature de fait inerte en 18.
        if (typeof $ === "undefined") {
            return;
        }
        const $container = $("div.o_form_view_container");
        if ($container.length && typeof $container.resizable === "function") {
            $container.resizable({
                handles: "e",
                minWidth: 400,
                maxWidth: 1200,
            });
        }
    },
});
