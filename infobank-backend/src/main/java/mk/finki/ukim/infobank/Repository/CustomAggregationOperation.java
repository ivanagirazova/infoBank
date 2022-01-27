package mk.finki.ukim.infobank.Repository;


import com.mongodb.DBObject;
import org.bson.Document;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperationContext;

import java.util.List;

public class CustomAggregationOperation implements AggregationOperation {

    private DBObject operation;


    public CustomAggregationOperation(DBObject operation) {
        this.operation = operation;
    }

    @Override
    public Document toDocument(AggregationOperationContext context) {
        return null;
    }

    @Override
    public List<Document> toPipelineStages(AggregationOperationContext context) {
        return null;
    }

    @Override
    public String getOperator() {
        return null;
    }
}