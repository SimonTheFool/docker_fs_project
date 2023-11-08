export abstract class AggregateRoot<T> entends Entity<T> {
    private _domainEvents: IDomainEvent[] = [];

    get id (): UniqueEntityID
}