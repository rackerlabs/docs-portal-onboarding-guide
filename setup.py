# -*- coding: utf-8 -*-


import os
import subprocess
import distutils.cmd
import setuptools.command.build_py
from io import open
from setuptools import setup


class WebpackBuildCommand(setuptools.command.build_py.build_py):

    """Prefix Python build with Webpack asset build"""

    def run(self):
        if not 'CI' in os.environ and not 'TOX_ENV_NAME' in os.environ:
            subprocess.run(['npm', 'install'], check=True)
            subprocess.run(['node_modules/.bin/webpack', '--config', 'webpack.prod.js'], check=True)
        setuptools.command.build_py.build_py.run(self)


class WebpackDevelopCommand(distutils.cmd.Command):

    description = "Run Webpack dev server"

    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        subprocess.run(
            ["node_modules/.bin/webpack-dev-server", "--open", "--config", "webpack.dev.js"],
            check=True
        )


class UpdateTranslationsCommand(distutils.cmd.Command):

    description = "Run all localization commands"

    user_options = []
    sub_commands = [
        ('extract_messages', None),
        ('update_catalog', None),
        ('transifex', None),
        ('compile_catalog', None),
    ]

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        for cmd_name in self.get_sub_commands():
            self.run_command(cmd_name)


class TransifexCommand(distutils.cmd.Command):

    description = "Update translation files through Transifex"

    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        subprocess.run(['tx', 'push', '--source'], check=True)
        subprocess.run(['tx', 'pull', '--mode', 'onlyreviewed', '-f', '-a'], check=True)


