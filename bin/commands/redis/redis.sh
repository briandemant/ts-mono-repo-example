#!/usr/bin/env bash
ROOT=$( cd $(dirname $0)/../../../; pwd )

echo I am Redis?
redis-server $ROOT/config/redis.conf
