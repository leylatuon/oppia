// Copyright 2020 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Configuration for lighthouse-ci.
 */

const baseConfig = require('./.lighthouserc-base.js')

module.exports = {
  'ci': {
    'collect': {
      'numberOfRuns': baseConfig['numberOfRuns'],
      'puppeteerScript': baseConfig['puppeteerScript'],
      'url': baseConfig['urlShards'][2]
    },
    'assert': {
      'assertMatrix': [
        baseConfig['basePerformanceAssertMatrix'],
        {
          'matchingUrlPattern': 'http://[^/]+/preferences$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/privacy-policy$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/profile/username1$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/signup?return_url=%2F$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/teach$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/terms$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/thanks$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/volunteer$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/topics-and-skills-dashboard$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/create/.*$',
          'assertions': {
            // TODO(#13465): Change this maxLength to 0 once images are migrated.
            'uses-webp-images': [
              'error', {'maxLength': 3, 'strategy': 'pessimistic'}
            ],
            // We need to use passive event listeners on this page so that
            // the page works correctly.
            'uses-passive-event-listeners': ['error', {'minScore': 0}],
            // MIDI library uses some deprecated API.
            'deprecations': ['error', {'minScore': 0}]
          }
        },
        {
          'matchingUrlPattern': 'http://[^/]+/collection_editor/create/.*$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/topic_editor/.*$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': 'http://[^/]+/skill_editor/.*$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
        {
          'matchingUrlPattern': '^http://[^/]+/story_editor/.*$',
          'assertions': baseConfig['basePerformanceAssertions']
        },
      ]
    },
    'upload': {
      'target': 'temporary-public-storage'
    }
  }
};
