FROM confluentinc/cp-kafka-connect-base:7.2.0

RUN confluent-hub install --no-prompt mongodb/kafka-connect-mongodb:1.7.0
