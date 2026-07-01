# Copyright 2017 ACSONE SA/NV
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl).

{
    "name": "Web Pivot View Hide Total",
    "summary": """
        This addon adds a new inherited version of pivot view.
        It intends to hide the last total column when required.""",
    "version": "18.0.1.0.0",
    "license": "AGPL-3",
    "author": "ACSONE SA/NV,Odoo Community Association (OCA)",
    "website": "https://github.com/OCA/web",
    "depends": ["web"],
    "data": [],
    # Odoo 18 : le JS des vues pivot (@web/views/pivot/*) a migré de
    # web.assets_backend vers web.assets_backend_lazy -> ce patch doit être dans
    # le même bundle, sinon "module not defined" (pivot pas encore chargé).
    "assets": {
        "web.assets_backend_lazy": [
            "web_pivot_hide_total/static/src/**/*",
        ],
    },
    "installable": True,
}
