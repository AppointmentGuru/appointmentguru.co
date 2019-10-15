docker login registry.gitlab.com
docker pull registry.gitlab.com/appointmentguru/ops/playbooks:master
docker run --rm -i registry.gitlab.com/appointmentguru/ops/playbooks:master python fetch-airtable.py
