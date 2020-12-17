"""
Theme for Docs.

"""

from os import path

from sphinx import version_info
from sphinx.locale import _

try:
    # Avaliable from Sphinx 1.6
    from sphinx.util.logging import getLogger
except ImportError:
    from logging import getLogger


__version__ = '0.5.0'
__version_full__ = __version__

logger = getLogger(__name__)


def get_html_theme_path():
    """Return list of HTML theme paths."""
    cur_dir = path.abspath(path.dirname(path.dirname(__file__)))
    return cur_dir


def config_initiated(app, config):
    theme_options = config.html_theme_options or {}
    if theme_options.get('canonical_url'):
        logger.warning(
            _('The canonical_url option is deprecated, use the html_baseurl option from Sphinx instead.')
        )


def setup(app):
    if version_info >= (1, 6, 0):
        app.add_html_theme('sphinx_rtd_theme', path.abspath(path.dirname(__file__)))

    if version_info >= (1, 8, 0):
        rtd_locale_path = path.join(path.abspath(path.dirname(__file__)), 'locale')
        app.add_message_catalog('sphinx', rtd_locale_path)
        app.connect('config-inited', config_initiated)

    return {'parallel_read_safe': True, 'parallel_write_safe': True}
