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
        // Odoo 17 : jQuery UI (.resizable) a été retiré des assets et la classe
        // o_form_view_container n'existe plus. Patch défensif : sans le plugin
        // resizable on ne fait rien — sinon onMounted lève une OwlError qui fait
        // planter le rendu de TOUTES les vues formulaire (cf. smoke-test V5).
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
